// Added by the symfony-generator

        $bundles[] = new Evolution7\GruntUseminBundle\Evolution7GruntUseminBundle();
        $bundles[] = new Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle();

        if (in_array($this->getEnvironment(), array('dev', 'test'))) {
            $bundles[] = new Kunstmaan\LiveReloadBundle\KunstmaanLiveReloadBundle();
        }

        return $bundles;