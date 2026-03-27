'use server'

export async function generateProposal(formData: FormData) {
  const clientName = formData.get('clientName') as string
  const projectDescription = formData.get('projectDescription') as string
  const budget = formData.get('budget') as string
  
  // Simulation d'un délai d'IA
  await new Promise(resolve => setTimeout(resolve, 2000))

  const proposal = `
## Proposition pour ${clientName}

**Résumé Exécutif**
Merci de nous avoir sollicités. Suite à nos discussions concernant le projet : "${projectDescription}", nous avons élaboré une stratégie complète pour atteindre vos objectifs.

**Étendue des Travaux**
1. Stratégie Initiale et Planification
2. Phases d'Implémentation Principales
3. Assurance Qualité et Tests
4. Déploiement et Passation

**Calendrier et Investissement**
Nous estimons l'achèvement de ce projet dans un délai de 4 à 6 semaines à compter du début des travaux.
L'investissement estimé requis est de ${budget ? `${budget} €` : 'à déterminer en fonction des ajustements finaux du périmètre'}.

**Étapes Suivantes**
Dès votre approbation de cette proposition préliminaire, nous rédigerons un énoncé des travaux formel détaillant tous les livrables et les échéanciers exacts.
`

  return { proposal }
}
