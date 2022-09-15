from django.test import TestCase

from member.models import Member

from .guild.guild import GuildManager

class KeyManagerTestCase(TestCase):
    def setUp(self):
        self.guild_manager = GuildManager()

    def test_get_guild(self):
        guild = self.guild_manager.get_guild('utc24')

        self.assertTrue(guild)

    def test_get_guild_admins(self):
        admins = self.guild_manager.get_guild_admins('utc24')
        self.assertTrue(len(admins) > 0)
 
    def test_get_guild_members(self):
        members = self.guild_manager.get_guild_members('utc24')
        self.assertTrue(len(members) > 0)

    def test_start_sync(self):
        members = Member.objects.all()
        self.assertTrue(len(members) == 0)

        self.guild_manager.start_sync()

        for member in members:
            self.assertTrue(member.active)