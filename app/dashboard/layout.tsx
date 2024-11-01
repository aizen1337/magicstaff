import RequireAuth from "@/services/auth/components/ProtectedPage"
import ProtectedPage from "./page"

export default function ProtectedLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <RequireAuth>{children}</RequireAuth>
}