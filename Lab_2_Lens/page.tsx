"use client";

import Image from "next/image";
import { useExploreProfiles } from "@lens-protocol/react-web";

export const getPictureURL = (profile: ProfileFragment) => {
  let picture = "/lens.jpeg";
  if (profile.picture) {
    if (profile.picture.original && profile.picture.original.url) {
      if (profile.picture.original.url.startsWith("ipfs://")) {
        const result = profile.picture.original.url.substring(7, profile.picture.original.url.length);
        picture = `https://lens.infura-ipfs.io/ipfs/${result}`;
      } else {
        picture = profile.picture.original.url;
      }
    } else if (profile.picture.uri) {
      picture = profile.picture.uri;
    }
  }

  return picture;
};

export default function Home() {
  const { data, loading } = useExploreProfiles();

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mt-8">Welcome to Lens</h1>
        <p className="text-xl mt-4">The decentralized social network</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-3">
        {data?.map((profile) => (
          <div key={profile.id} className="flex w-80 rounded p-4 bg-gray-500 flex-col items-center justify-center">
            <Image src={getPictureURL(profile)} alt={profile.handle} width={100} height={100} />
            <p className="text-xl mt-4">{profile.name}</p>
            <p className="mt-4">{profile.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
