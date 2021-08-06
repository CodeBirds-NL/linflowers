type Node = {
  node: {
    lang_code: string
  }
}

interface IData {
  edges: Node[]
}

/**
 * Get language based header/footer content
 */
export const getPageFromLangCode = (data: IData, lang: string) => data.edges.find(({ node }) => node.lang_code === lang
).node