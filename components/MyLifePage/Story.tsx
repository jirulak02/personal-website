import Card from "../ui/Card";

export default function Story() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-12">
      <Card noPadding>
        <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-3 space-y-3 p-6 md:pr-0 lg:col-span-4">
            <h3>2002 - 2014</h3>
            <p>Born and raised in the Czech Republic.</p>
          </div>
          <div className="col-span-1 hidden min-w-max items-center justify-center border-l-2 border-fgColor md:flex">
            <h2>0x1</h2>
          </div>
        </div>
      </Card>
      <div className="md:mt-14">
        <div className="relative -start-4 top-2 z-20 hidden md:block">
          <svg
            width="183"
            height="77"
            viewBox="0 0 183 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M181.624 70.364C182.377 70.0194 182.709 69.1293 182.364 68.376L176.748 56.0997C176.403 55.3463 175.513 55.015 174.76 55.3597C174.006 55.7043 173.675 56.5944 174.02 57.3477L179.012 68.26L168.1 73.2522C167.346 73.5969 167.015 74.487 167.36 75.2403C167.704 75.9936 168.594 76.325 169.348 75.9803L181.624 70.364ZM0.47674 3.40577L180.477 70.4058L181.523 67.5942L1.52326 0.594227L0.47674 3.40577Z"
              fill="rgb(var(--foreground-rgb))"
            />
          </svg>
        </div>
        <Card noPadding className="relative z-10">
          <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-1 hidden min-w-max items-center justify-center border-r-2 border-fgColor md:flex">
              <h2>0x2</h2>
            </div>
            <div className="col-span-3 space-y-3 p-6 md:pl-0 lg:col-span-4">
              <h3>2014 - 2019</h3>
              <p>Studied at Masarykovo klasické gymnázium in Říčany.</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="md:-mt-28 lg:-mt-24">
        <div className="relative left-32 top-2.5 hidden md:block">
          <svg
            width="453"
            height="95"
            viewBox="0 0 453 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.764538 84.1493C0.294721 84.8316 0.466991 85.7656 1.14931 86.2355L12.2684 93.8916C12.9507 94.3614 13.8847 94.1891 14.3545 93.5068C14.8243 92.8245 14.6521 91.8905 13.9698 91.4207L4.08612 84.6152L10.8916 74.7316C11.3614 74.0493 11.1891 73.1153 10.5068 72.6455C9.82445 72.1756 8.89046 72.3479 8.42064 73.0302L0.764538 84.1493ZM451.728 0.524882L1.72791 83.5249L2.27207 86.4751L452.272 3.47512L451.728 0.524882Z"
              fill="rgb(var(--foreground-rgb))"
            />
          </svg>
        </div>
        <Card noPadding>
          <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-3 space-y-3 p-6 md:pr-0 lg:col-span-4">
              <h3>2019 - 2020</h3>
              <p>
                Spent a year as an exchange student in California, USA, an experience that greatly
                improved my English language skills and broadened my perspective on life.
              </p>
            </div>
            <div className="col-span-1 hidden min-w-max items-center justify-center border-l-2 border-fgColor md:flex">
              <h2>0x3</h2>
            </div>
          </div>
        </Card>
      </div>
      <div className="md:mt-24">
        <div className="relative -start-4 top-1.5 z-20 hidden md:block">
          <svg
            width="183"
            height="107"
            viewBox="0 0 183 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M181.418 102.441C182.214 102.21 182.671 101.377 182.441 100.582L178.677 87.6171C178.446 86.8215 177.613 86.3638 176.818 86.5948C176.022 86.8258 175.565 87.658 175.796 88.4535L179.141 99.9777L167.617 103.323C166.822 103.554 166.364 104.387 166.595 105.182C166.826 105.978 167.658 106.435 168.454 106.204L181.418 102.441ZM0.277122 3.31432L180.277 102.314L181.723 99.6857L1.72288 0.685676L0.277122 3.31432Z"
              fill="rgb(var(--foreground-rgb))"
            />
          </svg>
        </div>
        <Card noPadding className="relative z-10">
          <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-1 hidden min-w-max items-center justify-center border-r-2 border-fgColor md:flex">
              <h2>0x4</h2>
            </div>
            <div className="col-span-3 space-y-3 p-6 md:pl-0 lg:col-span-4">
              <h3>2020 - 2022</h3>
              <p>
                Returned to the Czech Republic and graduated from Masarykovo klasické gymnázium in
                Říčany.
              </p>
              <p>
                Started learning programming in JavaScript and Python, plus did Harvard's CS50
                course.
              </p>
            </div>
          </div>
        </Card>
      </div>
      <div className="md:-mt-48 lg:-mt-32">
        <div className="relative left-32 top-2 hidden md:block">
          <svg
            width="453"
            height="131"
            viewBox="0 0 453 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.701889 121.248C0.286817 121.965 0.531531 122.883 1.24847 123.298L12.9317 130.062C13.6487 130.477 14.5664 130.232 14.9814 129.516C15.3965 128.799 15.1518 127.881 14.4348 127.466L4.04972 121.453L10.0622 111.068C10.4772 110.351 10.2325 109.434 9.51557 109.019C8.79863 108.604 7.88095 108.848 7.46588 109.565L0.701889 121.248ZM451.614 0.550648L1.61353 120.551L2.38652 123.449L452.386 3.44935L451.614 0.550648Z"
              fill="rgb(var(--foreground-rgb))"
            />
          </svg>
        </div>
        <Card noPadding>
          <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-3 space-y-3 p-6 md:pr-0 lg:col-span-4">
              <h3>2022 - 2023</h3>
              <p>
                Began studying at Prague University of Economics and Business, where I learned
                basics of Java and SQL.
              </p>
              <p>
                I also attend 42 Prague, a world-renowned chain of schools for C/C++ programming
                languages.
              </p>
              <p>
                Learned a ton for being a full-stack developer, including React, Next.js, Node.js
                and TypeScript.
              </p>
            </div>
            <div className="col-span-1 hidden min-w-max items-center justify-center border-l-2 border-fgColor md:flex">
              <h2>0x5</h2>
            </div>
          </div>
        </Card>
      </div>
      <div className="md:mt-32 lg:mt-44">
        <div className="relative -start-4 top-1 z-20 hidden md:block">
          <svg
            width="184"
            height="174"
            viewBox="0 0 184 174"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M182.043 173.499C182.871 173.476 183.523 172.785 183.499 171.957L183.114 158.463C183.09 157.635 182.4 156.982 181.572 157.006C180.744 157.03 180.091 157.72 180.115 158.548L180.458 170.543L168.463 170.886C167.635 170.91 166.982 171.6 167.006 172.428C167.03 173.256 167.72 173.909 168.548 173.885L182.043 173.499ZM0.970065 3.09052L180.97 173.091L183.03 170.909L3.02994 0.90948L0.970065 3.09052Z"
              fill="rgb(var(--foreground-rgb))"
            />
          </svg>
        </div>
        <Card noPadding className="relative z-10">
          <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-1 hidden min-w-max items-center justify-center border-r-2 border-fgColor md:flex">
              <h2>'\0'</h2>
            </div>
            <div className="col-span-3 space-y-3 p-6 md:pl-0 lg:col-span-4">
              <h3>2023 - Now</h3>
              <p>Started building client websites in Next.js.</p>
              <p>Joined a great team of developers at DX Heroes.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
