import DashboardLayout from "../ui/dashboard/DashboardLayout";
import LinkedInHead from "../components/LinkedInHead";

export default function RootDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <LinkedInHead />
      </head>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
