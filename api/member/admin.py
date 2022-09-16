from django.contrib import admin

from .models import MemberSocialLink, MemberAddress, Member


@admin.register(MemberSocialLink)
class MemberSocialLinkAdmin(admin.ModelAdmin):
    list_display = ('platform', 'url')
    list_display_links = ('platform', 'url')
    list_filter = ('platform', 'url')


@admin.register(MemberAddress)
class MemberAddressAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'primary')
    list_display_links = ('__str__',)

    list_filter = ('primary',)

    ordering = ('primary',)


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('active', '__str__', 'created_at', 'updated_at')
    list_display_links = ('__str__',)

    list_filter = ('active', 'created_at', 'updated_at')

    readonly_fields = ('created_at', 'updated_at')
    ordering = ('-created_at',)
