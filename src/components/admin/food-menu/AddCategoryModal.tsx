import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export const AddCategoryModal = () => {
  const [categoryName, setCategoryName] = useState<string>("");

  const createCategoryName = async () => {
    try {
      const response = await fetch("http://localhost:3001/category", {
        method: "POST",
        body: JSON.stringify({ categoryName: categoryName }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to create category");
      }
      setCategoryName("");
      toast.success(`Category (${categoryName}) created successfully`);
      console.log("dish", data);
    } catch (error) {
      toast.error("Failed to create category");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full w-9 h-9 bg-red-500">
          <Plus width={16} height={16} strokeWidth={1} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-col gap-6">
        <div className="mb-4 flex justify-between items-center">
          <DialogTitle>Add new category</DialogTitle>
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="rounded-full w-9 h-9"
            >
              <X />
            </Button>
          </DialogClose>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="font-semibold">
            Category name
          </Label>
          <div>
            <Input
              id="name"
              placeholder="Type category name..."
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type="button" className="mt-4" onClick={createCategoryName}>
              Add category
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
