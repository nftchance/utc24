from django.contrib import admin

from .models import Member


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('active', '__str__', 'created_at', 'updated_at')
    list_display_links = ('__str__',)

    list_filter = ('active', 'created_at', 'updated_at')

    readonly_fields = ('created_at', 'updated_at')
    ordering = ('-created_at',)
