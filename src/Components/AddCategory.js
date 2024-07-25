import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdHomeFilled } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
export const AddCategory = () => {
  return (
    <div className="w-[494px] h-[236px] bg-white">
      <div className="w-[446px] h-[236px]">
        <div className="w-[446px] h-[68px]">
          <div className="flex justify-between">
            <h1>Add Category</h1>
            <RiCloseLargeFill className="w-[16px] h-[16px]" />
          </div>
        </div>
        <div className="flex gap-5">
          <Select>
            <SelectTrigger className="w-[84px] h-[48px]">
              <MdHomeFilled className="w-[24px] h-[24px]" />

              <SelectValue placeholder="" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="l">
                Light
                <div className="w-[312px] h-[336px] border rounded-xl">
                  <MdHomeFilled className="w-[18px] h-[19px] " />
                </div>
              </SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[350px] h-[48px]">
              <SelectValue placeholder="Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Dialog>
            <DialogTrigger className="bg-[#16a34a] w-[446px] h-[40px] rounded-full mt-6">
              +Add
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
