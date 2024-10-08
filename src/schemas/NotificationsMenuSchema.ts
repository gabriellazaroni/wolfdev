import { z } from 'zod'

export const NotificationsMenuSchema = z
  .object({
    emailPlatformUpdates: z.boolean(),
    emailProjectInvites: z.boolean(),
    emailMessages: z.boolean(),
    emailDisableAll: z.boolean(),
    platformProjectInvites: z.boolean(),
    platformMessages: z.boolean(),
    platformDisableAll: z.boolean()
  })
  .transform((field) => ({
    emailPlatformUpdates: field.emailPlatformUpdates,
    emailProjectInvites: field.emailProjectInvites,
    emailMessages: field.emailMessages,
    emailDisableAll: field.emailDisableAll,
    platformProjectInvites: field.platformProjectInvites,
    platformMessages: field.platformMessages,
    platformDisableAll: field.platformDisableAll
  }))
