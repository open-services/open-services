# Compatibility

## Future versions

The service must not break the public interface it's already deployed, when the service is in the `Operating` phase. Up until it's in the `Operating` phase, the public interface to the service may change at any point.

## Other services

The service should, when applicable and possible, avoid fragmenting the ecosystem further.

For example, implementing a package registry should be compatible with the existing registries in that ecosystem.

That said, the service can still add extra features, but should try to work out-of-the-box with existing systems.
