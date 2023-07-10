import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { store } from "@/store";
import { removeTodo } from "@/store/todoSlice";

interface ModalRemoveTodoProps {
  title: string;
}

function ModalRemoveTodo({ title }: ModalRemoveTodoProps) {
  const handleRemoveTodo = () => {
    store.dispatch(removeTodo({ title }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your data
            from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            variant={"destructive"}
            onClick={handleRemoveTodo}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalRemoveTodo;
