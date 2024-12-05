
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/my-components/ui/dialog"
import React from "react";

export function CustomDialog({data}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    console.log("Dialog closed"); // Add your custom logic here
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
      <button className="fetch-btn">Fetch Details</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Fetch Details</DialogTitle>
          <DialogDescription>
           Here are the details of following employee.
          </DialogDescription>
        </DialogHeader>
         <div>Name: {`${data?.first_name} ${data?.last_name}`}</div>
         <div>Location: {data?.city}</div>
         <div>Contact Number: {data?.contact_number}</div>
         <div style={{marginTop:'3px'}}>Profile Image:</div>
         <img src="/assets/modal_image.png"/>
        <DialogFooter>
        <button className="close-btn" onClick={handleClose}>Close</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
