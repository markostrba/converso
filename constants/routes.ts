const ROUTES = {
  HOME: "/",
  COMPANIONS: "/companions",
  MY_JOURNEY: "/my-journey",
  SIGN_IN: "/sign-in",
  NEW_COMPANIONS: "/companions/new",
  COMPANION: (id: string) => `/companions/${id}`,
}
export default ROUTES