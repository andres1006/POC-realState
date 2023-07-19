/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardPropertyHorizontalProps } from "./CardPropertyHorizontal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardPropertyHorizontalCollectionOverridesProps = {
    CardPropertyHorizontalCollection?: PrimitiveOverrideProps<CollectionProps>;
    CardPropertyHorizontal?: CardPropertyHorizontalProps;
} & EscapeHatchProps;
export declare type CardPropertyHorizontalCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CardPropertyHorizontalProps;
} & {
    overrides?: CardPropertyHorizontalCollectionOverridesProps | undefined | null;
}>;
export default function CardPropertyHorizontalCollection(props: CardPropertyHorizontalCollectionProps): React.ReactElement;
