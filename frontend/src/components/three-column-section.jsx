import Container from '@/components/container';
import CategoriesWidget from '@/components/widgets/categories-widget';
import TagsWidget from '@/components/widgets/tags-widget';
import NewMembersWidget from '@/components/widgets/new-members-widget';
import QuestionItem from '@/components/question/question-item';

export default function ThreeColumnSection() {
	return (
		<section className="px-4 py-16">
			<Container className="flex flex-col md:flex-row gap-8">
				<div className="flex flex-col gap-4 w-full md:w-80 order-2 md:order-1">
					<CategoriesWidget />
					<TagsWidget />
				</div>
				<div className="flex flex-col gap-8 flex-1 order-1 md:order-2">
					<QuestionItem />
					<QuestionItem />
					<QuestionItem />
					<QuestionItem />
				</div>
				<div className="w-full md:w-80 order-3 ">
					<NewMembersWidget />
				</div>
			</Container>
		</section>
	);
}
