'use client'
import { dark, experimental__simple } from '@clerk/themes'
import { useTheme } from "next-themes";
import {
    ClerkProvider,
  } from '@clerk/nextjs'
  import { ThemeProvider } from "@/components/theme/theme-provider"
export default function AuthProvider(
    {
        children,
      }: Readonly<{
        children: React.ReactNode;
      }>
) 
{
    const { theme } = useTheme();
    return (
    <ClerkProvider 
        appearance={{
        baseTheme: theme == 'dark' ? dark : experimental__simple,
      }}>
        <ThemeProvider             
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {children}
        </ThemeProvider>
    </ClerkProvider>
    )
}