
'use client'

import { useState } from 'react'
import {
  Search,
  CreditCard,
  CheckCircle,
} from 'lucide-react'

export default function AdminPaymentsPage() {
  const [search, setSearch] =
    useState('')

  const payments = [
    {
      id: 1,
      name: 'Ibrahim Riaz',
      email: 'ibrahim@gmail.com',
      card: '**** **** **** 4242',
      amount: '$5.00',
      plan: 'Lifetime Pro',
      status: 'Paid',
      transaction: 'TXN-9384721',
      date: '2026-06-24',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@gmail.com',
      card: '**** **** **** 5555',
      amount: '$5.00',
      plan: 'Lifetime Pro',
      status: 'Paid',
      transaction: 'TXN-9384722',
      date: '2026-06-23',
    },
    {
      id: 3,
      name: 'Sarah Smith',
      email: 'sarah@gmail.com',
      card: '**** **** **** 8888',
      amount: '$5.00',
      plan: 'Lifetime Pro',
      status: 'Paid',
      transaction: 'TXN-9384723',
      date: '2026-06-22',
    },
    {
      id: 4,
      name: 'Alex Johnson',
      email: 'alex@gmail.com',
      card: '**** **** **** 1122',
      amount: '$5.00',
      plan: 'Lifetime Pro',
      status: 'Paid',
      transaction: 'TXN-9384724',
      date: '2026-06-21',
    },
  ]

  const filteredPayments =
    payments.filter(
      payment =>
        payment.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        payment.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    )

  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          All Payments
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage premium
          subscriptions and
          transactions.
        </p>
      </div>

      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

        <input
          type="text"
          placeholder="Search payments..."
          value={search}
          onChange={e =>
            setSearch(
              e.target.value
            )
          }
          className="w-full rounded-xl border bg-background py-2 pl-10 pr-4 outline-none"
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block">
        <div className="overflow-hidden rounded-xl border">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px]">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-5 py-4 text-left">
                    Customer
                  </th>

                  <th className="px-5 py-4 text-left">
                    Card
                  </th>

                  <th className="px-5 py-4 text-left">
                    Amount
                  </th>

                  <th className="px-5 py-4 text-left">
                    Plan
                  </th>

                  <th className="px-5 py-4 text-left">
                    Transaction
                  </th>

                  <th className="px-5 py-4 text-left">
                    Date
                  </th>

                  <th className="px-5 py-4 text-left">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredPayments.map(
                  payment => (
                    <tr
                      key={payment.id}
                      className="border-t"
                    >
                      <td className="px-5 py-4">
                        <div>
                          <h4 className="font-medium">
                            {
                              payment.name
                            }
                          </h4>

                          <p className="text-sm text-muted-foreground">
                            {
                              payment.email
                            }
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        {payment.card}
                      </td>

                      <td className="px-5 py-4 font-semibold text-green-500">
                        {
                          payment.amount
                        }
                      </td>

                      <td className="px-5 py-4">
                        {payment.plan}
                      </td>

                      <td className="px-5 py-4">
                        {
                          payment.transaction
                        }
                      </td>

                      <td className="px-5 py-4">
                        {payment.date}
                      </td>

                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                          <CheckCircle
                            size={14}
                          />
                          {
                            payment.status
                          }
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 lg:hidden">
        {filteredPayments.map(
          payment => (
            <div
              key={payment.id}
              className="rounded-xl border bg-card p-4 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <CreditCard className="text-violet-500" />

                <div className="min-w-0">
                  <h3 className="truncate font-semibold">
                    {
                      payment.name
                    }
                  </h3>

                  <p className="break-all text-xs text-muted-foreground">
                    {
                      payment.email
                    }
                  </p>
                </div>
              </div>

              <p className="mb-4 text-lg font-bold text-green-500">
                {
                  payment.amount
                }
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>
                    Card
                  </span>

                  <span>
                    {
                      payment.card
                    }
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>
                    Plan
                  </span>

                  <span>
                    {
                      payment.plan
                    }
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>
                    Date
                  </span>

                  <span>
                    {
                      payment.date
                    }
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>
                    Transaction
                  </span>

                  <span className="text-xs">
                    {
                      payment.transaction
                    }
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                  <CheckCircle
                    size={14}
                  />
                  {
                    payment.status
                  }
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

