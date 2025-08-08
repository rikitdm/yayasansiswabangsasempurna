"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

// Data placeholder - Anda akan mengambil ini dari database Anda
const donationHistory = [
  {
    id: "don_1",
    date: "2024-07-15",
    amount: 50.0,
    project: "Perlengkapan Sekolah untuk Anak-Anak",
    status: "Selesai",
  },
  {
    id: "don_2",
    date: "2024-06-20",
    amount: 100.0,
    project: "Bantuan Bencana: Badai Ian",
    status: "Selesai",
  },
  {
    id: "don_3",
    date: "2024-05-01",
    amount: 25.0,
    project: "Klinik Kesehatan Masyarakat",
    status: "Selesai",
  },
];

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
       <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
        <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Skeleton className="h-24 w-24 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-64" />
              </div>
            </div>
            <div>
              <Skeleton className="h-8 w-40 mb-4" />
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead><Skeleton className="h-5 w-24" /></TableHead>
                        <TableHead><Skeleton className="h-5 w-48" /></TableHead>
                        <TableHead><Skeleton className="h-5 w-24" /></TableHead>
                        <TableHead className="text-right"><Skeleton className="h-5 w-20" /></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[...Array(3)].map((_, i) => (
                        <TableRow key={i}>
                          <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                          <TableCell><Skeleton className="h-5 w-48" /></TableCell>
                          <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                          <TableCell className="text-right"><Skeleton className="h-5 w-20" /></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
        </div>
       </div>
    );
  }

  const getInitials = (email: string) => {
    return email.substring(0, 2).toUpperCase();
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="space-y-8">
        <div className="flex items-center gap-6">
          <Avatar className="h-24 w-24 border-2 border-primary">
            <AvatarImage src={user.photoURL ?? ""} alt={user.displayName ?? user.email ?? ""} />
            <AvatarFallback className="text-3xl">
              {user.email ? getInitials(user.email) : "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold font-headline">
              {user.displayName || "Selamat Datang!"}
            </h1>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold font-headline mb-4">Donasi Saya</h2>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Proyek</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Jumlah</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {donationHistory.map((donation) => (
                    <TableRow key={donation.id}>
                      <TableCell>{new Date(donation.date).toLocaleDateString()}</TableCell>
                      <TableCell className="font-medium">{donation.project}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{donation.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        ${donation.amount.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}