from django.db import models


class MemberSocialLink(models.Model):
    platform = models.CharField(max_length=100)
    url = models.URLField(blank=True)


class MemberAddress(models.Model):
    address = models.CharField(max_length=256)
    primary = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.member} - {self.address}'


class Member(models.Model):
    active = models.BooleanField(default=True)

    name = models.CharField(max_length=100)
    bio = models.TextField(blank=True)

    pfp_url = models.URLField(blank=True)

    social_links = models.ManyToManyField(MemberSocialLink, blank=True)
    addresses = models.ManyToManyField(MemberAddress, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    @property
    def has_primary(self):
        return self.addresses.filter(primary=True).exists()

    def set_primary(self, address):
        self.addresses.update(primary=False)
        self.addresses.filter(address=address).update(primary=True)

    def get_primary(self):
        if self.addresses.filter(primary=True).exists():
            return self.addresses.get(primary=True)
        return None
