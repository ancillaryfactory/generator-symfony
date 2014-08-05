// Added by the symfony-generator

        $bundles[] = new Evolution7\GruntUseminBundle\Evolution7GruntUseminBundle();
        $bundles[] = new Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle();
        $bundles[] = new __bundle__\MainBundle\__bundle__MainBundle();

        if (in_array($this->getEnvironment(), array('dev', 'test'))) {
            $bundles[] = new Kunstmaan\LiveReloadBundle\KunstmaanLiveReloadBundle();
        }

        return $bundles;