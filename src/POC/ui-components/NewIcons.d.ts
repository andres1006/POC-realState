/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewIconsOverridesProps = {
    NewIcons?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NewIconsProps = React.PropsWithChildren<Partial<IconProps> & {
    property1?: "Add" | "Apartment" | "Archive" | "Bath" | "Bed" | "Best Price" | "Bold" | "Calendar" | "Call" | "Chart" | "Check" | "Check-circle" | "Chevron-down" | "Chevron-left" | "Chevron-right" | "Chevron-up" | "Close" | "Condominium" | "Credit" | "Dashboard" | "Debt" | "Document" | "Document Request" | "Dollar Square" | "Dorm" | "Dot Horizontal" | "Dot Vertical" | "Double-checks" | "Double-chevron-left" | "Double-chevron-right" | "Edit" | "Electricity" | "Employment" | "Eye" | "Eye-slash" | "Filter" | "Gas Station" | "Help" | "House" | "Image" | "Income to rent" | "Info" | "Insight" | "Italic" | "Key" | "Link" | "Location Control" | "Location Marker" | "Logout" | "Love" | "Low Commision" | "Map" | "Medal" | "Message" | "Money" | "Money Tick" | "New-notification" | "Notification" | "On-time" | "Ordered List" | "Paperclip" | "Properties" | "Property Insurance" | "Recent Activity" | "Rent Payment" | "Repair" | "Search" | "Setting" | "Share" | "Sort" | "Sort Ascending" | "Sort Descending" | "Square Meters" | "Star" | "Tenant Application" | "Tenants" | "Tips" | "Tour in person" | "Tour virtual" | "Townhouse" | "Trash" | "Unordered List" | "User" | "Video Virtual" | "Wifi";
} & {
    overrides?: NewIconsOverridesProps | undefined | null;
}>;
export default function NewIcons(props: NewIconsProps): React.ReactElement;
