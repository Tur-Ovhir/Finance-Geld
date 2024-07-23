import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export const Navbar = () => {
  return (
    <div className="w-full h-[72px] bg-white flex justify-between flex-row">
      <div className=" gap-3 ml-3 flex-row flex w-[226px] h-[40px] justify-between">
        <img className="w-[28px] h-[28px]" src="Vector.jpg" />
        <p className="text-black">Dashboard</p>
        <h1 className="text-[#0F172A]">Records</h1>
      </div>
      <div className="flex-row flex gap-3">
        <Dialog>
          <DialogTrigger className="bg-blue-500 w-[99px] h-[32px] rounded-full">
            +Record
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
