import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


interface HeaderButtonProps {
    links: string[];
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({links}) => {
  return (
    <div className="flex gap-4">
      <AlertDialog>
        <AlertDialogTrigger><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify"><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Où voulez-vous aller ?</AlertDialogTitle>
          </AlertDialogHeader>
            <AlertDialogDescription></AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>Rester</AlertDialogCancel>
            {links.map((link) => (
                <AlertDialogAction key={link}>
                    <a href={link}>{link}</a>
                </AlertDialogAction>
            ))}
          </AlertDialogFooter>  
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

