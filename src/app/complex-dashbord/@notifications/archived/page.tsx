import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <h1>ArchivedNotifications</h1> <br />
      <p>
        <Link href="/complex-dashbord">Default</Link>
      </p>
    </Card>
  );
}
