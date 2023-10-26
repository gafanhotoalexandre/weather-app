import { Card, Subtitle, Divider, Title } from '@tremor/react'

import { CityPicker } from '@/components/CityPicker'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-t from-[#394f68] to-[#183b7e] p-10 flex flex-col items-center justify-center">
      <Card className="max-w-4xl mx-auto">
        <Title className="text-[#6B7280] leading-none font-bold text-center mb-10">
          Weather AI App
        </Title>
        <Subtitle className="text-xl text-center">
          Desenvolvido com OpenAI, Next.js, TailwindCSS, Tremor 3.0 e muito
          mais!
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#394f68] to-[#183b7e]">
          <CityPicker />
        </Card>
      </Card>
    </main>
  )
}
