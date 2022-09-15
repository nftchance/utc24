import httpx

from member.models import Member, MemberAddress

GUILD_ID = 'utc24'

class GuildManager:
    def __init__(self):
        self.guild = None

    def get_guild(self, guild_id=GUILD_ID):
        response = httpx.get(f'https://api.guild.xyz/v1/guild/{guild_id}')

        if response.status_code == 200:
            self.guild = response.json()
            return self.guild
        else:
            return None

    def get_guild_admins(self, guild_id=GUILD_ID):
        if not self.guild:
            self.get_guild(guild_id)

        return [admin['address'] for admin in self.guild['admins']]

    def get_guild_members(self, guild_id=GUILD_ID, role_id='Member'):
        if not self.guild:
            self.get_guild(guild_id)

        role = filter(lambda role: role['name'] == role_id, self.guild['roles'])

        # return the list of members from the role with the .name of 'Member'
        return list(role)[0]['members']
        
    def start_sync(self, guild_id=GUILD_ID, role_id='Member'):
        # Get the guild members
        guild_members = self.get_guild_members(guild_id, role_id)
    
        print("Found {} members".format(len(guild_members)))
        print(guild_members)

        # Get all members and set them to inactive
        members = Member.objects.all()
        members.update(active=False)

        # Loop through the guild members
        for guild_member in guild_members:
            # Determine if there is a member in the database with this address
            member = members.filter(addresses__address=guild_member).first()

            # If there is a member, update the active status and continue
            if member:
                member.active = True
                member.save()
                continue

            print(f'Creating new member: {guild_member}')

            # If there is no member, create a new one
            address = MemberAddress.objects.create(
                address=guild_member, 
                primary=True
            )
            member = Member.objects.create()
            member.addresses.add(address)
            member.save()