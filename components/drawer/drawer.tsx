import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";

export const DrawerGame = () => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline" className="absolute bottom-0 left-1/2 w-[80vw] -translate-x-1/2 rounded-t-lg bg-blue-500 py-2 text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                ▲</Button>
            </DrawerTrigger>
            <DrawerContent className="rounded-t-lg bg-blue-500 p-6 text-white shadow-lg">
                <div className="mx-auto w-full max-w-sm">
                <DrawerHeader className="mb-4 flex flex-col items-center">
                    <DrawerTitle className="rounded-md bg-blue-700 px-4 py-2 text-2xl font-bold uppercase text-white shadow-md">BREAKING <span className="text-blue-300">NEWS</span>
                    </DrawerTitle>
                <DrawerDescription className="rounded-md bg-blue-900 px-4 py-2 text-2xl font-bold uppercase text-white shadow-md">24/24</DrawerDescription>
                </DrawerHeader>

                </div>
                <div className="px-4 text-base leading-relaxed text-white">
                <p>Lorem ipsum dolor sit amet, Fusce auctor congue hendrerit, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor congue hendrerit.Lorem ipsum dolor sit amet, Fusce auctor congue hendrerit, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor congue hendrerit</p>
                </div>           
            </DrawerContent>
        </Drawer>
    )
}