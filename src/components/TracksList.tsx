import { FlatList, FlatListProps } from "react-native"
import library from '@/assets/data/library.json';
import { TrackListItem } from "./TrackListItem";

export type TrackListProps = Partial<FlatListProps<unknown>>;

export const TrackList = ({ ...flatlistProps }: TrackListProps) => {
    console.log(library.length)
    return <FlatList data={library} renderItem={({ item: track }) => <TrackListItem track={{ title: track.title, artist: track.artist, image: track.artwork }} {...flatlistProps} />} />
}