
import { Inter } from "next/font/google";

import Videos from "@/components/videos/Videos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        <Videos />
      </div>
    </section>
  );
}
