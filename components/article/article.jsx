import { convertToDateReadableForHuman } from "@/util/helpers";
import ArticleDate from "../commons/article-date";
import ArticleContent from "./article-content";
import ArticleImage from "./article-image";
import ArticleTitle from "./article-title";

function Article (props) {
  const { title, dateTime, imageUrl, content } = props;
  const dateTimeReadableForHuman = convertToDateReadableForHuman(dateTime);

  return (<article>
    <ArticleTitle>{title}</ArticleTitle>

    <ArticleDate date={dateTimeReadableForHuman} />

    {imageUrl && <ArticleImage url={imageUrl} />}

    <ArticleContent>{content}</ArticleContent>
  </article>);
}

export default Article;