import { getHeroProjects } from "@/lib/content/filters";
import { getAllProjects } from "@/lib/content/loader";
import { HeroProject } from "@/lib/content/types";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

export default async function GenericPdf({
  params,
}: {
  params: Promise<{ locale: "en" | "de" }>;
}) {
  const { locale } = await params;
  const projects = await getAllProjects(locale);
  const heroes = getHeroProjects(projects);
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "white",
      color: "black",
    },
  });

  return (
    <div>
      <section>
        <Document title="Oliver Faro Profile">
          <Page size="A4" style={styles.page}>
            <PdfHeroList heroes={heroes} />
          </Page>
        </Document>
      </section>
    </div>
  );
}

function PdfHeroList({ heroes }: { heroes: HeroProject[] }) {
  const styles = StyleSheet.create({
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  return (
    <>
      {heroes.map((hero) => {
        return (
          <View key={hero.title} style={styles.section}>
            <Text> {hero.title} </Text>
          </View>
        );
      })}
    </>
  );
}
