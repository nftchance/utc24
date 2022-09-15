from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger
from django_apscheduler.jobstores import DjangoJobStore
from django_apscheduler.models import DjangoJobExecution
from django_apscheduler import util

from handlers.guild.guild import GuildManager

guild_manager = GuildManager()

@util.close_old_connections
def sync_guild_members():
    guild_manager.start_sync()

@util.close_old_connections
def delete_old_job_executions(max_age=604_800):
    DjangoJobExecution.objects.delete_old_job_executions(max_age)

class JobManager:
    def ready(self, *args, **options):
        scheduler = BackgroundScheduler()
        scheduler.add_jobstore(DjangoJobStore(), "default")

        # Retrieve repos every 12 hours
        scheduler.add_job(
            sync_guild_members,
            trigger=CronTrigger(minute="*/1"),
            id="sync_guild_members",
            max_instances=1,
            replace_existing=True,
        )
        print("Added job sync_guild_members.")

        scheduler.add_job(
            delete_old_job_executions,
            trigger=CronTrigger(
                day_of_week="mon", hour="00", minute="00"
            ),  # Midnight on Monday, before start of the next work week.
            id="delete_old_job_executions",
            max_instances=1,
            replace_existing=True,
        )
        print(
            "Added weekly job: 'delete_old_job_executions'."
        )

        try:
            print("Starting scheduler...")
            scheduler.start()
        except KeyboardInterrupt:
            print("Stopping scheduler...")
            scheduler.shutdown()
            print("Scheduler shut down successfully!")
