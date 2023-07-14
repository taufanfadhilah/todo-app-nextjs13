import React, { useState } from "react";
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
import { useRemoveTodoMutation } from "@/services/todo";

interface ModalRemoveTodoProps {
  id: string;
  title: string;
}

function ModalRemoveTodo({ id }: ModalRemoveTodoProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [removeTodo] = useRemoveTodoMutation();

  const handleRemoveTodo = async () => {
    removeTodo(id);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"destructive"} onClick={() => setIsOpen(true)}>
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
