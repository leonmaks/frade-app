"use client"

import {
  useRef,
  // useState
} from "react"
import { usePathname, useRouter } from "next/navigation"
import { SearchIcon, XIcon } from "lucide-react"

import { APP_SEARCH_KEY } from "@/shared/config/defs"

import { Input } from "@/shared/shadcn-ui/input"
import { Button } from "@/shared/shadcn-ui/button"

// import { useSearchParam } from "@/shared/hooks/use-search-params"

export const SearchInput = () => {
  const router = useRouter()
  const pathname = usePathname()
  // const [search, setSearch] = useSearchParam(APP_SEARCH_KEY)

  // const [search, setSearch] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)


  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value)
  // }

  const handleClear = () => {
    // setValue("")
    // setSearch("")
    if (inputRef.current) inputRef.current.value = ""
    router.replace(`${pathname}`)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const inputSearchValue = formData.get("inputSearchValue") as string

    const params = new URLSearchParams()
    if (inputSearchValue?.length > 0) {
      params.set(APP_SEARCH_KEY, inputSearchValue)
    } else {
      params.delete(APP_SEARCH_KEY)
    }

    router.replace(`${pathname}?${params.toString()}`)
    // setSearch(value)
    // inputRef.current?.blur()
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      <form
        onSubmit={handleSearch}
        className="relative max-w-[720px] w-full"
      >
        <Input
          ref={inputRef}
          name="inputSearchValue"
          // value={search}
          // onChange={handleChange}
          placeholder="Search"
          className="md:text-base placeholder:text-neutral-800 px-14 w-full border-none focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3px_1px_rgba(65,69,73,.15)] bg-[#f0f4f8] rounded-full h-10 focus-visible:ring-0 focus:bg-white"
        />

        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
        >
          <SearchIcon />
        </Button>

        {/* {value && ( */}
        <Button
          onClick={handleClear}
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
        >
          <XIcon />
        </Button>
        {/* )} */}

      </form>
    </div>
  )
}
