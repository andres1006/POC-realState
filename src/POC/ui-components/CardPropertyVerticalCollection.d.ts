/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardPropertyVerticalProps } from "./CardPropertyVertical";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardPropertyVerticalCollectionOverridesProps = {
    CardPropertyVerticalCollection?: PrimitiveOverrideProps<CollectionProps>;
    CardPropertyVertical?: CardPropertyVerticalProps;
} & EscapeHatchProps;
export declare type CardPropertyVerticalCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CardPropertyVerticalProps;
} & {
    overrides?: CardPropertyVerticalCollectionOverridesProps | undefined | null;
}>;
export default function CardPropertyVerticalCollection(props: CardPropertyVerticalCollectionProps): React.ReactElement;
