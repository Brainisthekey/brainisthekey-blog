"use client";
import Image from "next/image";
import { useState } from "react";
import { Post } from "@/types/post";
import { Heading, Paragraph } from "@/components/typography";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export const Posts = ({ posts, type }: { posts: Post[]; type: string }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="max-w-5xl mx-auto my-10">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Link
            key={
              type == "blog" ? `blog-${post.title}` : `projects-${post.title}`
            }
            href={
              type == "blog" ? `/blog/${post.slug}` : `/projects/${post.slug}`
            }
            className="relative my-10 block"
            onMouseEnter={() => setHovered(post.slug)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence mode="wait">
              {hovered === post.slug && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1.05,
                    scaleY: 1.2,
                  }}
                  exit={{
                    opacity: 0,
                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  className="absolute z-0 pointer-events-none bg-gray-50 inset-0 h-full w-full rounded-md "
                />
              )}
            </AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20">
              <Image
                src={post.image}
                alt="thumbnail"
                height="200"
                width="200"
                className="rounded-md object-cover h-40 w-60"
              />
              <div className="flex flex-col col-span-3">
                <div className="flex md:justify-between flex-col md:flex-row md:items-center">
                  <Heading className="text-lg md:text-lg lg:text-lg">
                    {post.title}
                  </Heading>
                  <Paragraph size="xs">{post.date}</Paragraph>
                </div>
                <Paragraph size="sm" className="mt-2">
                  {post.description}
                </Paragraph>
                <div className="flex h-full items-end md:justify-end">
                  <div className="flex space-x-2 flex-wrap mt-2">
                    {post.tags?.map((tag, index) => (
                      <span
                        key={`tag-${post.slug}`}
                        className="text-xs px-1 py-0.5 text-text-foreground border border-neutral-200 bg-white rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
