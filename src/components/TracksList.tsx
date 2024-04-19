import { FlatList, FlatListProps, View } from "react-native"
import library from '@/assets/data/library.json';
import { TrackListItem } from "./TrackListItem";
import { utilsStyles } from "@/styles";

export type TrackListProps = Partial<FlatListProps<unknown>>;

const ItemDivider = () => (
    <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TrackList = ({ ...flatlistProps }: TrackListProps) => {
    console.log(library.length)
    return <FlatList data={library} ItemSeparatorComponent={ItemDivider} renderItem={({ item: track }) => <TrackListItem track={{ title: track.title, artist: track.artist, image: track.artwork }} {...flatlistProps} />} />
}