import Seo from "components/Seo";
import MainLayout from "components/layouts/MainLayout";

export default function Home() {
    return (
        <div>
            <Seo />
            <MainLayout>
                <div>
                    <h1 className="title">Dashboard</h1>
                </div>
            </MainLayout>
        </div>
    );
}
