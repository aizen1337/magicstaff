import { clerkClient } from "../../lib/clerkClient"

export async function inviteUser(
    email: string,
) {
    const response = await clerkClient.invitations.createInvitation({
    emailAddress: email,
    redirectUrl: process.env.ONBOARDING_URL,
  })
    console.log(response)
    return response
}