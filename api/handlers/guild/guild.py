import httpx

from member.models import Member

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

        members = filter(lambda role: role['name'] == role_id, self.guild['roles'])

        # return the list of members from the role with the .name of 'Member'
        return list(members)
        
    def start_sync(self):
        # Get the guild
        guild = self.get_guild(GUILD_ID)

        # We encountered an error, return
        if not guild: return

        # Get all members
        members = Member.objects.all()

        # Loop through all members that have a Profile in the database.
        for member in members:
            # Check if one of their connected wallets is in the guild.
            if guild.members.addresses.values('address') not in member.addresses.values_list('address', flat=True):
                # If not, mark them as inactive.
                member.active = False
                member.save()