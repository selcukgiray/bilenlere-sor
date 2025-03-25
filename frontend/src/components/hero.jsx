import React from 'react';
import { Button } from '@heroui/button';
import { IconChevronRight, IconPlus } from '@tabler/icons-react';
import HeroFeatures from '@/components/hero-features';

export default function Hero() {
	return (
		<div className="flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-blue-500/10 py-16 px-4">
			<div className="flex flex-col items-center gap-8 text-center max-w-screen-lg mx-auto w-full">
				<div className="inline-flex items-center rounded-full border px-4 py-2 bg-primary/10 text-primary border-primary/20 text-sm font-medium">
					Soru & Cevap Platformu
				</div>
				<h1 className="text-5xl md:text-7xl font-black">
					<span className="text-primary">Bilenlere</span> Sor
				</h1>
				<p className="text-xl md:text-3xl text-default-600">
					Aklınızdaki sorulara uzmanlardan yanıtlar alın, bilginizi
					paylaşın ve{' '}
					<span className="text-primary font-medium">
						bilenlere sorun
					</span>{' '}
					bir parçası olun.
				</p>
				<div className="flex gap-x-4">
					<Button
						color="primary"
						size="lg"
						startContent={<IconPlus size={20} />}
					>
						Soru Sor
					</Button>
					<Button
						variant="bordered"
						size="lg"
						endContent={<IconChevronRight size={20} />}
					>
						Keşfet
					</Button>
				</div>
				<div className="mt-8">
					<HeroFeatures />
				</div>
			</div>
		</div>
	);
}
