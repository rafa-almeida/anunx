import Link from 'next/link'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        paddingTop: theme.spacing(3),
        paddingBotton: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBotton: theme.spacing(6),
        }
    }
}))
const Footer = () => {
    const classes = useStyles()
    return (
       <Container maxWidth="lg" component="footer" className={classes.footer}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <Box textAlign="center">
                        <Link href="#" passHref>
                            <Typography color="textSecondary" variant="subtitle1">Ajuda e Contato</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign="center">
                        <Link href="#" passHref>
                            <Typography color="textSecondary" variant="subtitle1">Dicas de Segurança</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign="center">
                        <Link href="/user/publish" passHref>
                            <Typography color="textSecondary" variant="subtitle1">Anunciar e Vender</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign="center">
                        <Link href="#" passHref>
                            <Typography color="textSecondary" variant="subtitle1">Plano profissional</Typography>
                        </Link>
                    </Box>
                </Grid>

            </Grid>
       </Container>
   )
}

export default Footer