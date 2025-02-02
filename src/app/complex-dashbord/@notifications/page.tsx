import { Card } from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <h1>Notifications</h1> <br />
      <p>
        <Link href="complex-dashbord/archived">passe Archived</Link>
      </p>
    </Card>
  );
}
