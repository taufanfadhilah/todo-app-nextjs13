import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TodoForm() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Task Tracker</CardTitle>
        <CardDescription>
          Stay organized and boost your productivity with Task Tracker.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Title</Label>
              <Input id="name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Note</Label>
              <Input id="name" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset</Button>
        <Button>Add</Button>
      </CardFooter>
    </Card>
  );
}
