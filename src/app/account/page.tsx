'use client'

import { Press_Start_2P } from 'next/font/google'
import Link from 'next/link'
import { ArrowLeft, Wallet, Trophy, TrendingDown, Coins, History } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CustomImage } from "@/components/ui/custom-image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BalanceDropdown } from "@/components/balance-dropdown"
import { useWallet } from '@/app/providers'

const pressStart2P = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p'
})

export default function AccountPage() {
  const { isConnected, address, connect } = useWallet()

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  return (
    <div className={`min-h-screen bg-black text-[#63e211] ${pressStart2P.variable} font-press-start-2p`}>
      {/* Header */}
      <header className="border-b border-green-900/50 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container max-w-[1400px] flex h-20 items-center justify-between px-0">
          <div className="flex items-center gap-6 pl-6">
            <Link href="/" className="flex items-center gap-2">
              <CustomImage
                src="/8BETbanner.png"
                alt="8BET Logo"
                width={300}
                height={100}
                className="h-20 w-auto"
                priority
                quality={100}
              />
            </Link>
          </div>
          <div className="flex items-center gap-4 pr-6">
            <BalanceDropdown />
            <Link href="/account">
              <Button 
                variant="outline"
                className="border-[#63e211]/20 bg-[#1a4d1a] text-[#63e211] hover:bg-[#63e211]/20 font-press-start-2p"
              >
                ACCOUNT
              </Button>
            </Link>
            <Link href="/cashier">
              <Button className="bg-[#63e211] text-black hover:bg-[#7fff00] shadow-md shadow-[#63e211]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 font-press-start-2p">
                CASHIER
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Added mb-[30px] here */}
      <div className="mb-[30px]" />

      {/* Main Content */}
      <div className="container py-8 relative">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-[#63e211] hover:bg-[#63e211]/20 font-press-start-2p">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Account Content */}
          <div className={`transition-all duration-200 ${!isConnected ? 'blur-sm pointer-events-none' : ''} space-y-12`}>
            {/* Account Header */}
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-press-start-2p text-[#63e211]">ACCOUNT DASHBOARD</h1>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Wallet className="h-4 w-4" />
                <span>{isConnected ? formatAddress(address as string) : '0x000...0000'}</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Total Wagered */}
              <Card className="bg-gradient-to-br from-[#1a4d1a] to-[#0d260d] border-[#63e211]/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Coins className="h-4 w-4 text-[#63e211]" />
                    <div className="text-sm text-[#63e211]/80">Total Wagered</div>
                  </div>
                  <div className="text-xl font-bold text-[#63e211]">$0.00</div>
                </CardContent>
              </Card>

              {/* Total Profit/Loss */}
              <Card className="bg-gradient-to-br from-[#1a4d1a] to-[#0d260d] border-[#63e211]/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingDown className="h-4 w-4 text-[#63e211]" />
                    <div className="text-sm text-[#63e211]/80">Total Profit/Loss</div>
                  </div>
                  <div className="text-xl font-bold text-[#63e211]">$0.00</div>
                </CardContent>
              </Card>
            </div>

            {/* Game Stats */}
            <Card className="bg-gradient-to-br from-[#1a4d1a] to-[#0d260d] border-[#63e211]/20">
              <CardHeader>
                <CardTitle className="text-[#63e211] font-press-start-2p text-lg flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  Game Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'FLAPPY PEPE', played: 0, won: 0, lost: 0 },
                  { name: 'TANKZ', played: 0, won: 0, lost: 0 },
                  { name: 'ETHRIS', played: 0, won: 0, lost: 0 },
                  { name: 'BOUNCE', played: 0, won: 0, lost: 0 },
                ].map((game) => (
                  <div key={game.name} className="bg-black/30 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{game.name}</span>
                      <span className="text-xs text-[#63e211]/80">Games Played: {game.played}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-[#63e211]/80">Won</div>
                        <div className="text-sm text-[#63e211]">{game.won}</div>
                      </div>
                      <div>
                        <div className="text-xs text-[#63e211]/80">Lost</div>
                        <div className="text-sm text-[#63e211]">{game.lost}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gradient-to-br from-[#1a4d1a] to-[#0d260d] border-[#63e211]/20">
              <CardHeader>
                <CardTitle className="text-[#63e211] font-press-start-2p text-lg flex items-center gap-2">
                  <History className="h-4 w-4" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-sm text-[#63e211]/80 py-8">
                  No activity yet
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Connect Wallet Overlay */}
          {!isConnected && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
              <div className="text-center space-y-8 p-8 rounded-lg bg-[#0d260d]/80 border border-[#63e211]/20 max-w-md w-full mx-4">
                <h2 className="text-xl font-press-start-2p text-[#63e211]">Connect Wallet to View Account</h2>
                <Button 
                  onClick={() => connect()}
                  className="bg-[#63e211] text-black hover:bg-[#7fff00] shadow-md shadow-[#63e211]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 font-press-start-2p flex items-center gap-2 mx-auto"
                >
                  <Wallet className="h-4 w-4" />
                  CONNECT WALLET
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 