"use client"

import { IconCirclePlusFilled, type Icon } from "@tabler/icons-react"
import { useState } from "react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavEvents } from "@/components/nav-events"
import Link from "next/link"

interface LifeEvent {
  id: number;
  event: string;
  description: string;
  monetaryValue: number;
}

interface ApiResponse {
  id?: number;
  event?: string;
  description?: string;
  monetaryValue?: number;
  error?: string;
}

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  const [eventData, setEventData] = useState<LifeEvent | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCreateLifeEvent = async () => {
    setIsModalOpen(true)
    setIsLoading(true)
    setEventData(null)
    try {
      const response = await fetch("/api/events")

      const contentType = response.headers.get("content-type");

      if (!response.ok) {
        let errorMsg = `Error fetching event: ${response.status} ${response.statusText}`;
        if (contentType && contentType.includes("application/json")) {
          try {
            const errorBody: ApiResponse = await response.json();
            if (errorBody.error) {
              errorMsg = errorBody.error;
            }
          } catch (jsonParseError) {
            // JSON content type, but parsing failed
            errorMsg = `Failed to parse JSON error response: ${(jsonParseError instanceof Error) ? jsonParseError.message : String(jsonParseError)}`;
          }
        } else {
          // Not JSON, likely HTML or text. Get a snippet.
          try {
            const textBody = await response.text();
            errorMsg = `Server error ${response.status}: ${textBody.substring(0, 200)}...`;
          } catch {
            errorMsg = `Server error ${response.status} and failed to read response body.`;
          }
        }
        throw new Error(errorMsg);
      }

      // Response.ok is true, but still check content type before parsing
      if (contentType && contentType.includes("application/json")) {
        const data: ApiResponse = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        if (data.id !== undefined && data.event && data.description && data.monetaryValue !== undefined) {
          setEventData(data as LifeEvent)
        } else {
          throw new Error("Fetched data is not a valid LifeEvent object after parsing.");
        }
      } else {
        // Response.ok was true, but content type was not JSON. This is unexpected.
        const responseText = await response.text();
        throw new Error(`Expected JSON response but received ${contentType || 'unknown content type'}. Body: ${responseText.substring(0, 200)}...`);
      }

    } catch (error) {
      console.error("Failed to fetch life event:", error instanceof Error ? error.message : String(error))
      setEventData(null);
    } finally {
      setIsLoading(false)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Life Events"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
              onClick={handleCreateLifeEvent}
            >
              <IconCirclePlusFilled />
              <span>Create Life Event</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
      <NavEvents
        title="New Life Event"
        isOpen={isModalOpen}
        onClose={closeModal}
        isLoading={isLoading}
        eventData={eventData}
      />
    </SidebarGroup>
  )
}
