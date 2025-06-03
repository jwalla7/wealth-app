import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// Define LifeEvent type (ideally, share this from a common types file or import if available)
interface LifeEvent {
    id: number; // Assuming id is part of the event, though not explicitly displayed
    event: string;
    description: string;
    monetaryValue: number;
}

export function NavEvents({
    title,
    isOpen,
    onClose,
    isLoading,
    eventData,
}: {
    title: string
    isOpen: boolean
    onClose: () => void
    isLoading: boolean
    eventData: LifeEvent | null
}) {
    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{eventData && !isLoading ? eventData.event : title}</DialogTitle>
                    <DialogDescription>
                        You have a new life event.
                    </DialogDescription>
                </DialogHeader>

                {isLoading ? (
                    <div className="flex justify-center items-center h-24">
                        <p>Loading event details...</p>
                    </div>
                ) : eventData ? (
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{eventData.event}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>{eventData.description}</p>
                                <p>Monetary Value: {eventData.monetaryValue.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ) : (
                    <div className="flex justify-center items-center h-24">
                        <p>No event data to display, or an error occurred.</p>
                    </div>
                )}

                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" onClick={onClose}>
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
