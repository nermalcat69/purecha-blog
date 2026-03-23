"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Star } from "lucide-react";

import { toolCategories, featuredTools } from "@/lib/tools";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Link href="/">
                <div className="flex aspect-square size-12 items-center justify-center rounded-lg bg-foreground text-background text-xs font-bold">
                  PC
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Purecha</span>
                  <span className="text-xs text-muted-foreground">
                    chai &amp; tea
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/"}
                tooltip="Home"
              >
                <Link href="/">
                  <Home className="size-4" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-1.5">
            <Star className="size-3 fill-foreground/60 text-foreground/60" />
            Picks
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {featuredTools.map((tool) => {
                const Icon = tool.icon;
                const isActive = pathname === tool.href;
                return (
                  <SidebarMenuItem key={tool.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={tool.name}
                    >
                      <Link href={tool.href}>
                        <Icon className="size-4" />
                        <span>{tool.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {toolCategories.map((category) => (
          <SidebarGroup key={category.id}>
            <SidebarGroupLabel>{category.name}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.tools.map((tool) => {
                  const Icon = tool.icon;
                  const isActive = pathname === tool.href;
                  return (
                    <SidebarMenuItem key={tool.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={tool.name}
                      >
                        <Link href={tool.href}>
                          <Icon className="size-4" />
                          <span>{tool.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <p className="text-xs text-muted-foreground p-2 group-data-[collapsible=icon]:hidden">
          No logins. No tracking.<br />
          <span className="opacity-60">Just chai.</span>
        </p>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
