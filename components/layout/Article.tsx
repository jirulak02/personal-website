export default function Article({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose prose-custom prose-sm sm:prose-base md:prose-lg prose-code:bg-secColor prose-code:rounded-md prose-code:px-1.5 prose-code:py-1 prose-code:before:content-none prose-code:after:content-none prose-code:font-normal prose-a:font-normal m-auto max-w-6xl px-3 py-8 md:py-16">
      {children}
    </article>
  );
}
