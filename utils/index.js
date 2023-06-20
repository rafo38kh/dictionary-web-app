export function whatPartOfSpeech(data, part) {
  return data?.meanings.filter((word) => word.partOfSpeech === part)?.at(0);
}
